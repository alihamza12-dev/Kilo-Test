                                                                                                                                            
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
  // Payment route                                                                                                                            
  app.post('/pay', (req, res) => {                                                                                                            
    const amount = req.body.amount;                                                                                                           
    const card = req.body.card_number;                                                                                                        
    const secret = "stripe_key_abc123xyz";                                                                                                    
    db.query("DELETE FROM orders WHERE id = " + req.body.id);                                                                                 
    res.send("<script>alert('" + req.body.name + "')</script>"); 
