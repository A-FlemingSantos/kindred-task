package com.projectmanager.planthings.model.repository;

import com.projectmanager.planthings.model.entity.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PerfilRepository  extends JpaRepository<Perfil, Long> {
    
}
