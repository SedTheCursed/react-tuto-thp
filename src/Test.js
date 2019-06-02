       /*
Appeler setState avec un objet, ça fait quoi ?

Ça envoie une série de modifications à l’état local du composant. Il faut bien comprendre que ce n’est pas le nouvel état dans son intégralité, mais juste des différences. C’est pratique, car ça évite de toujours devoir envoyer un état complet ; si on veut juste changer une propriété de l’état, on se contente de cette propriété :

this.setState({ open: true }) // modifie uniquement cette propriété

Les soucis commencent lorsqu’on oublie cet aspect « différentiel » et que l'on omet donc de réinitialiser certains champs. Imaginons un état représentant les champs d’un formulaire que l'on souhaiterait remettre à vide :

class Form extends Component {

  constructor(props) {

    super(props)

    this.state = { name: '', target: 5, units: '' }

  }


  // …


  resetForm() {

    this.setState({}) // Ooops !

  }

}

Ici,  resetForm()  ne réinitialisera en fait rien du tout, car ce que l'on envoie n'est autre qu'une liste vide de modifications. Voici une implémentation correcte :

const DEFAULT_STATE = { name: '', target: 5, units: '' }


class Form extends Component {

  constructor(props) {

    super(props)

    this.state = { ...DEFAULT_STATE }

  }


  // …


  resetForm() {

    this.setState(DEFAULT_STATE) // Mieux !

  }

}

Attention, c’est asynchrone !

Un autre aspect fondamental de  setState()  : il est asynchrone. Il traitera donc les mises à jour plus tard, au moment le plus opportun, par lots. Voici un exemple d’utilisation naïve qui ne fonctionnera pas du tout :

doSomethingWrong() {

  // this.state.open est `false`

  this.setState({ open: true })

  console.log(this.state.open === true) // `false` : pas encore…

}


doSomethingSuperWrong() {

  // this.state.count == 0

  this.setState({ count: this.state.count + 1 })

  this.setState({ count: this.state.count + 1 })

  this.setState({ count: this.state.count + 1 })

  console.log(this.state.count) // 0

  // Et même une fois pris en compte, ce sera 1, pas 3, vu que

  // tout le long de cette méthode, `this.state.count` valait 0.

}

Mais… pourquoi ?!

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