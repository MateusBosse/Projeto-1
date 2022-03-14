
const prompt = require('prompt-sync')();

// USEI NAO SEM ACENTO!!!!!!!!!!!!!!!!!!!!

console.clear();

console.log("Sua jornada será decidida por suas respostas!!!");

console.log();

console.log("Seu herói começa em uma jornada pela sohada maçã do Eden, uma fruta lendária que da poderes especiais, tais como:");

console.log("Projeção de Ilusão, controle da mente e manipulação física");

console.log();

let pergunta1 = prompt("Em sua jornada, irá encontrar muitos perigos, estara preparado para passar por eles? ").toLowerCase();

console.log();

let pergunta2 = prompt("Continuará em busca do fruto mesmo que falte água ou comida? ").toLowerCase();

console.log();

let pergunta3 = prompt("Arriscaria a vida de alguém que ama em troca do fruto mágico? ").toLowerCase();

console.log();

let pergunta4 = prompt("Usará o fruto para bons propósitos? ").toLowerCase();

console.log();

let pergunta5 = prompt("Teria coragem de enfrentar feras místicas, para provar seu valor? ").toLowerCase();

console.log();

// Quantidade de sim's e nao's
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
