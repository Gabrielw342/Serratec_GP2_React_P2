package com.saborrei.saborrei.api.service;

import com.saborrei.saborrei.api.dto.ChatRequest;
import com.saborrei.saborrei.api.dto.ChatResponse;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    public ChatResponse processarPergunta(ChatRequest request) {
        String pergunta = request.getPergunta();

        String resposta = "Recebi sua pergunta: " + pergunta;
        /**/
        return new ChatResponse(resposta);
    }
}