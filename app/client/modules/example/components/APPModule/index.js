import Tab from '../Tab';

@connect(
  state => state.example
)
export default class APPModule extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Tab data={this.props.list} />
      </div>
    );
  }
}