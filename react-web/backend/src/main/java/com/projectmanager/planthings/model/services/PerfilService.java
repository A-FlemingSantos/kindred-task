package com.projectmanager.planthings.model.services;

import com.projectmanager.planthings.model.entity.Perfil;
import com.projectmanager.planthings.model.repository.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PerfilService{

    @Autowired // Injeção de dependência automática
    private PerfilRepository perfilRepository;

    public List<Perfil> findAll() {
        return perfilRepository.findAll();
    }

    public Perfil save(Perfil perfil) {
        perfil.setCodStatus(true);
        return perfilRepository.save(perfil);
    }
}