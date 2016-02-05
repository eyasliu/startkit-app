import {List, ListItem, Checkbox} from 'material-ui';
import * as actions from '../../actions';

@connect(
  null,
  dispatch => bindActionCreators(actions, dispatch)
)

export default class List_ extends Component{
  constructor(){
    super();
  }

  static defaultProps = {
    type: 'all',
    data: []
  }

  render(){
    const {data, type} = this.props;
    const list = data.filter(item => {
      if(type == 'all'){
        return true;
      }else if(type == 'active'){
        return item.isActive;
      }else if(type == 'completed'){
        return !item.isActive;
      }
    })
    return (
      <List>
        {list.map(item => (
          <ListItem 
            leftCheckbox={<Checkbox checked={item.isActive} onCheck={e => this.props.toggleActive(item.id)} />}
            primaryText={item.title} 
          />)
        )}
      </List>
    )
  }
}