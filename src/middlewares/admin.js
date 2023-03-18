module.exports =  (req, res, next) => {
    
    const admins = ['Ada', 'Greta', 'Vim', 'Tim'];

    const user = req.query.user;

    if (admins.includes(user)) {
      res.send(`Hola Admin: ${user}`);
    } else {
      res.send('No tienes los privilegios para ingresar');
    }
    next()
  };
  
    
   
        
    


