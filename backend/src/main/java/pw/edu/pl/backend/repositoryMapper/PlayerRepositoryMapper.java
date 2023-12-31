package pw.edu.pl.backend.repositoryMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pw.edu.pl.backend.entity.UserEn;
import pw.edu.pl.backend.mapper.CharacterMapper;
import pw.edu.pl.backend.mapper.PlayerMapper;
import pw.edu.pl.backend.mapper.UserMapper;
import pw.edu.pl.backend.model.Player;
import pw.edu.pl.backend.model.Character;
import pw.edu.pl.backend.modelDto.CharacterDto;
import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.repository.CharacterRepository;
import pw.edu.pl.backend.repository.PlayerRepository;
import pw.edu.pl.backend.repository.UserRepository;

@Service
public class PlayerRepositoryMapper implements IPlayerRepositoryMapper{
    
    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CharacterRepository characterRepository;

    @Override
    public PlayerDto getPlayerWithBindedUserAndCharacter(int id) {
        PlayerDto outputPlayerDto;
        Player player = playerRepository.findAll()
                .stream()
                .filter(p -> p.getId() == id)
                .map(PlayerMapper.INSTANCE::mapToPlayer)
                .toList()
                .get(0);

        if(player == null) {
            return null;
        } else {
            outputPlayerDto = new PlayerDto(player.getId(), player.getName(), player.getSurname(), player.getNickname(), null, player.getRank());
        }

        UserEn userBindedToPlayer = getUserBindedToPlayer(player);
        CharacterDto characterDtoBindedToPlayer = getCharacterDtoBindedToPlayer(player);
        
        try {
            outputPlayerDto.setName(userBindedToPlayer.getName());
            outputPlayerDto.setSurname(userBindedToPlayer.getSurname());
            outputPlayerDto.setNickname(userBindedToPlayer.getNickname());
            if(characterDtoBindedToPlayer != null) {
                outputPlayerDto.setCharacter(characterDtoBindedToPlayer);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
        return outputPlayerDto;
    }

    private UserEn getUserBindedToPlayer(Player player) {
        return userRepository.findAll()
                .stream()
                .map(UserMapper.INSTANCE::mapToUserEn)
                .filter(userEn -> userEn.getId() == player.getUserId())
                .toList()
                .get(0);
    }

    private CharacterDto getCharacterDtoBindedToPlayer(Player player) {
        CharacterDto characterDtoBindedToPlayer = null;
        Character characterBindedToPlayer = characterRepository.findAll()
                .stream()
                .map(CharacterMapper.INSTANCE::mapToCharacter)
                .filter(character -> character.getId() == player.getCharacterId())
                .toList()
                .get(0);
        if(characterBindedToPlayer != null) {
            characterDtoBindedToPlayer = new CharacterDto(characterBindedToPlayer.getId(), characterBindedToPlayer.getGameId(), characterBindedToPlayer.getName(), characterBindedToPlayer.getDescription());
        }
        return characterDtoBindedToPlayer;
    }
    
}
