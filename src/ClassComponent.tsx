import { Component, ReactNode } from "react";




type ClassComponentProps  = {
  name:string; // required
  text?:string; // optional
}

type ClassComponentState = {
  name:string; // required
}

class ClassComponent extends Component<ClassComponentProps,ClassComponentState> {

  state:ClassComponentState = {
    name:'init'
  }

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props:ClassComponentProps) { // doma basılmadan önce ilk çalışan yer, dom ile alakası olamayan bir yer, state initial değer aktarımı burada yapılabilir
    super(props);
    // eventlerin listen olabilmesi için bind ile class atanmalıdır.
    this.buttonClick = this.buttonClick.bind(this);
    // event EventHandler onClicked+=
    
  
  }


  // 1. sırada
  // ilk değer atamalarının yapıldığı yer
  componentDidMount(): void { 
      // component domda ilk oluştuğu anda buraya düşer.
      this.setState({name:'title1'})
      console.log('1 kez buraya component yüklendikten sonra girer');
      
  }

  componentDidUpdate(prevProps: Readonly<ClassComponentProps>, prevState: Readonly<ClassComponentState>, snapshot?: any): void {
      console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount(): void {
      console.log('component domdan çıktığında'); // if blogu
  }

  // methodlar ile çalışıyoruz
  buttonClick(){
    alert('clicked');
    this.setState({name:'after-init'}); // state değişiminde render methodu tetiklenir.
  }

  // render methodu yazmak zorundayız.
  // constructor sonraki ilk method render.
  render(): ReactNode {
      return <>
        <p>{this.state.name}</p>
        <p>{this.props.text}</p>
        <button onClick={this.buttonClick}>Click Me</button>
      </>
  }
}

export default ClassComponent;
