package com.saborrei.saborrei.api.service;

import com.saborrei.saborrei.api.dto.ReceitaDTO;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class IAService {

    public String gerarResposta(String pergunta, List<ReceitaDTO> receitas) {

        return "Resposta gerada pela IA para: " + pergunta;
    }
}
