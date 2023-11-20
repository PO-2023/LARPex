package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pw.edu.pl.backend.entity.EnrollEn;
import pw.edu.pl.backend.entity.UserEn;
import pw.edu.pl.backend.interfaces.IPlayerService;
import pw.edu.pl.backend.mapper.CharacterMapper;
import pw.edu.pl.backend.mapper.PlayerMapper;
import pw.edu.pl.backend.mapper.UserMapper;
import pw.edu.pl.backend.model.Player;
import pw.edu.pl.backend.model.Character;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.CharacterDto;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.modelDto.PlayerWithActiveEventDto;
import pw.edu.pl.backend.repository.CharacterRepository;
import pw.edu.pl.backend.repository.EnrollRepository;
import pw.edu.pl.backend.repository.PlayerRepository;
import pw.edu.pl.backend.repository.UserRepository;

@Service
public class PlayerService implements IPlayerService {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CharacterRepository characterRepository;

    @Autowired
    EnrollRepository enrollRepository;

    EventService eventService;

    @Override
    public PlayerDto getPlayer(Long id) {
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
                .filter(userEn -> player.getUserId()!=null && userEn.getId() == player.getUserId())
                .toList()
                .get(0);
    }

    CharacterDto getCharacterDtoBindedToPlayer(Player player) {
        CharacterDto characterDtoBindedToPlayer = null;
        Character characterBindedToPlayer = characterRepository.findAll()
                .stream()
                .map(CharacterMapper.INSTANCE::mapToCharacter)
                .filter(character -> character.getId() == player.getCharacterId())
                .toList()
                .get(0);
        if(characterBindedToPlayer != null) {
            characterDtoBindedToPlayer = new CharacterDto(characterBindedToPlayer.getId(), characterBindedToPlayer.getName(), characterBindedToPlayer.getDescription());
        }
        return characterDtoBindedToPlayer;
    }

    public PlayerWithActiveEventDto getPlayerWithActiveEvent(Long id) {
        EnrollEn enrollEn = enrollRepository.findByUserId(id);
if(enrollEn == null) {
            return null;
        } else {
            EventDto event = eventService.getEventById(Long.valueOf(enrollEn.getEventId()));
            if(event.getStatus() == Status.Active){
                return new PlayerWithActiveEventDto(id, getPlayer(id).getName(), getPlayer(id).getSurname(), getPlayer(id).getNickname(), getPlayer(id).getCharacter(), getPlayer(id).getRank(), event);
            } else {
                return null;
            }

        }
    }
}
