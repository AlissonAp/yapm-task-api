module.exports = {
  //Projects
  notFoundProject() {
    return {
      success: false,
      cause: "Projeto não encontrado!"
    };
  },
  updateProject() {
    return {
      success: true,
      cause: "Projeto atualizado!"
    };
  },
  createProject() {
    return {
      success: true,
      cause: "Projeto criado!"
    };
  },
  deleteProject() {
    return {
      success: true,
      cause: "Projeto excluído!"
    };
  },
  notCreatedProject() {
    return {
      success: false,
      cause: "Não foi possível criar o projeto!"
    };
  },

  foundProjects() {
    return {
      success: true,
      cause: "Projeto(s) encontrado(s)!"
    };
  },

  //Tasks
  notFoundTask() {
    return {
      success: false,
      cause: "Tarefa não encontrada!"
    };
  },
  updateTask() {
    return {
      success: true,
      cause: "Tarefa atualizada!"
    };
  },
  createTask() {
    return {
      success: true,
      cause: "Tarefa criada!"
    };
  },
  deleteTask() {
    return {
      success: true,
      cause: "Tarefa excluída!"
    };
  },
  notCreatedTask() {
    return {
      success: false,
      cause: "Não foi possível criar a tarefa!"
    };
  },
  foundTask() {
    return {
      success: true,
      cause: "Projeto(s) encontrado(s)!"
    };
  },

  //Generic

  exception(exception){
    return {
        success: false,
        cause: "Ocorreu um erro durante o processamento da requisição!",
        exception
      };
  }
};
