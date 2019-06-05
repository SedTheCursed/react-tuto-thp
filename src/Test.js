//import React, {Component} from 'react'

/*Mais… pourquoi ?!

Elle ne fonctionnera pas pour des raisons de performance. Cela nous permet, dans nos codes, d’appeler  this.setState()  à de multiple occasions, avec des modifications diverses et variées, sans ralentir le système. React fusionne les demandes et applique le résultat au meilleur moment, en garantissant simplement que les modifications seront appliquées avant la prochaine étape de cycle de vie (concept que nous explorerons plus en détail au prochain chapitre).
Et ce 2e argument de rappel ?

La méthode  setState()  accepte un callback en 2e argument : est-il là pour nous dire que l’état est à jour ? Pas tout à fait : il est là pour nous dire que l’ensemble des appels à  setState()  ont été traités et que le composant a de nouveau fait un rendu. En pratique, on préfère utiliser la méthode de cycle de vie  componentDidUpdate()  .

En pratique, si on veut se garantir le résultat de modifications incrémentales ou se prémunir d'autres soucis liés à la nature asynchrone de  setState() , on utilisera plutôt un premier argument de type fonction.
Appeler  setState()  avec une fonction

L’approche la plus fiable, générique et pérenne de  setState()  consiste à l’appeler avec un seul argument qui est une fonction de rappel, ce qui constitue sa signature canonique. La fonction a deux arguments : l’état d’avant (qui tient compte de toute tentative de  setState()  exprimée auparavant) et les props en vigueur du composant. Elle renvoie un objet qui sera traité comme celui passé jusqu’ici : une série de modifications à apporter à l’état.

Ainsi, on peut par exemple faire de l’incrémental :

doSomethingRight() {

  // this.state.count vaut 0

  handleClick() {

    this.setState(

      (prevState, props) => ({ count: prevState.count + props.inc })

    )

    this.setState(

      (prevState, props) => ({ count: prevState.count + props.inc })

    )

    this.setState(

      (prevState, props) => ({ count: prevState.count + props.inc })

    )

  }

}
*/       