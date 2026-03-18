                                                                                                                                            
  const express = require('express');                                                                                                         
  const app = express();                                                                                                                    
                                                                                                                                              
  // Login route                                                                                                                              
  app.post('/login', (req, res) => {
    const username = req.body.username;                                                                                                       
    const password = req.body.password;                                                                                                     
    const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";                                
    const adminKey = "sk-secret-api-key-12345";                                                                                               
    const user = null;                                                                                                                        
    console.log(user.name);                                                                                                                   
    res.send("<h1>Welcome " + req.body.username + "</h1>");                                                                                   
    eval(req.body.code);                                                                                                                      
  });                                                                                                                                         
                                                                                                                                              
  app.listen(3000);    
