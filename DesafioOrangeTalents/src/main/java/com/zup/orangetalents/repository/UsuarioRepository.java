package com.zup.orangetalents.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zup.orangetalents.model.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long>{
	
	Optional<UsuarioModel> findByCpf(String cpf);

}
