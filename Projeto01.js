
const prompt = require('prompt-sync')();

// USEI NAO SEM ACENTO!!!!!!!!!!!!!!!!!!!!

console.clear();

console.log("Sua jornada será decidida por suas respostas!!!");

console.log();

console.log("Seu herói começa em uma jornada pela sohada maçã do Eden, uma fruta lendária que da poderes especiais, tais como:");

console.log("Projeção de Ilusão, controle da mente e manipulação física");

console.log();

let pergunta1 = prompt("Em sua jornada, irá encontrar muitos perigos, o primeiro uma bela sereia em um lago, conseguiu se livrar dos encantos dela? ").toLowerCase();

console.log();

let pergunta2 = prompt("Faltou água e comida, ira roubar de um senhor de idade camponês? ").toLowerCase();

console.log();

let pergunta3 = prompt("Uma voz mágica, fala para tirar a vida de sua amada para pegar tal fruto, você conseguira fazer? ").toLowerCase();

console.log();

let pergunta4 = prompt("Você conseguiu escapar da caverna cheia de feras selvagens? ").toLowerCase();

console.log();

let pergunta5 = prompt("Seu último desafio, conseguiu pular de um penhasco e continuar vivo? ").toLowerCase();

console.log();

// Quantidade de sim's;
// 0 - Você prefere ficar em casa, relaxando e curtindo um belo dia!
// 1-2 - Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!
// 3 - Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!
// 4 - Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!
// 5 - Você encontra a maça do eden e de maneira inquestionável torna-se a pessoa mais forte do mundo.


if (pergunta1 == 'sim'){
        if (pergunta2 == 'sim'){                      
            if (pergunta3 == 'sim'){
                if (pergunta4 == 'sim'){
                     if (pergunta5 == 'sim'){
                     console.log("Você encontra a maça do eden e de maneira inquestionável torna-se a pessoa mais forte do mundo.");
                 }
                    else if (pergunta5 == 'nao'){
                        console.log("Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!");
                    }
                }
                else if (pergunta4 == 'nao'){
                    if (pergunta5 == 'sim'){
                        console.log("Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!");
                 }
                 else if (pergunta5 == 'nao'){
                     console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                 }
                }
             }
             else if (pergunta3 == 'nao'){
                    if (pergunta4 == 'sim'){
                         if (pergunta5 == 'sim'){
                         console.log("Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!");
                 }
                 else if (pergunta5 == 'nao'){
                     console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                 }
             }
             else if (pergunta4 == 'nao'){
                 if (pergunta5 == 'sim'){
                     console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                 }
                 else if (pergunta5 == 'nao'){
                     console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                 }
             }
         }
  }
       else if (pergunta2 == 'nao'){                      
             if (pergunta3 == 'sim'){
                if (pergunta4 == 'sim'){
                     if (pergunta5 == 'sim'){
                 console.log("Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!");
             }
                else if (pergunta5 == 'nao'){
                    console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                }
            }
            else if (pergunta4 == 'nao'){
                     if (pergunta5 == 'sim'){
                        console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
             }
             else if (pergunta5 == 'nao'){
                 console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!")
             }
            }
         }
         else if (pergunta3 == 'nao'){
                if (pergunta4 == 'sim'){
                     if (pergunta5 == 'sim'){
                     console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
             }
             else if (pergunta5 == 'nao'){
                 console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!")
             }
            }
            else if (pergunta4 == 'nao'){
                if (pergunta5 == 'sim'){
                   console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
              }
              else if (pergunta5 == 'nao'){
                console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                }
             }
         }
     }
}   else if (pergunta1 == 'nao'){
                if (pergunta2 == 'nao'){
                    if (pergunta3 == 'nao'){
                        if (pergunta4 == 'nao'){
                            if (pergunta5 == 'nao'){
                        console.log("Você prefere ficar em casa, relaxando e curtindo um belo dia!");
                    }
                    else if (pergunta5 == 'sim'){
                        console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                    }
            }
            else if (pergunta4 == 'sim'){
                if (pergunta5 == 'sim'){
                    console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                }
                else if (pergunta5 == 'nao'){
                    console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                }
            }
           }
           else if (pergunta3 == 'sim'){
               if (pergunta4 == 'sim'){
                   if (pergunta5 == 'sim'){
                       console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                   }
                   else if (pergunta5 == 'nao'){
                       console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                   }
               }
               else if (pergunta4 == 'nao'){
                   if (pergunta5 == 'sim'){
                       console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                   }
                   else if (pergunta5 == 'nao'){
                       console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!")
                   }
               }
           }
        } 
        else if (pergunta2 == 'sim'){
            if (pergunta3 == 'sim'){
                if (pergunta4 == 'sim'){
                    if (pergunta5 == 'sim'){
                        console.log("Você encontra a maça do eden, porêm depois de tantos desafios, você come ela, e te da uma dor de barriga enorme. Sendo conhecido como o homem da barriga mais frágil do mundo!");
                    }
                    else if (pergunta5 == 'nao'){
                        console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                    }
                }
                else if (pergunta4 == 'nao'){
                    if (pergunta5 == 'sim'){
                        console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                    }
                    else if (pergunta5 == 'nao'){
                        console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                    }
                }
            }
            else if (pergunta3 == 'nao'){
                if (pergunta4 == 'sim'){
                    if (pergunta5 == 'sim'){
                        console.log("Estava a um passo de conseguir a tão sonhada maça do eden, mas quando chegou no lugar, outra pessoa ja tinha pegado ela!");
                    }
                    else if (pergunta5 == 'nao'){
                        console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                    }
                }
                else if (pergunta4 == 'nao'){
                    if (pergunta5 == 'sim'){
                        console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                    }
                    else if (pergunta5 == 'nao'){
                        console.log("Você viu que os desafios eram enormes dmais, e desistiu logo após o início deles!");
                    }
                }
            }
        }
    }
