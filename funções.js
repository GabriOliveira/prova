2-
const funcGet =  () => {
    try {
      const resposta =  axios.get("api");
      setUsers(resposta.data);
    } catch (erros) {
      console.log(erros);
    }
  }

  const funcPost =  (lista) => {
    try {
       axios.post("api", lista);
    
    } catch (erros) {
      console.log(erros);
    }
  }

  const funcPut =  (lista) => {
    try {
       axios.put(
        `api${sla}`,
        sla
      );
    } catch (erros) {
      console.log(erros);
    }
  }
  
  

  const funcDele = (lista => {
    try {
        axios.delete(`http://localhost:30000/usuarios/${userId}`);
     } catch (erros) {
       console.log(erros);
     }
  })
