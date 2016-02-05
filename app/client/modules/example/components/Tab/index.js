import {Tabs, Tab, Paper, TextField} from 'material-ui';
import List from '../List';
import * as actions from '../../actions';

@connect(
  null,
  dispatch => bindActionCreators(actions, dispatch)
)
export default class Tab_ extends Component {
  constructor(){
    super();
  }

  addTodo(e){
    this.props.addTodo(e.target.value);
    e.target.value = '';
  }

  render(){
    const {data} = this.props;
    return (
      <div 
        style={{
          margin: "1em 4em"
        }}
      >
        <h2>This is a todo list</h2>
        <Paper>
          <Tabs>
            <Tab label="All">
              <List data={data} type="all" />
              <span style={{padding: "0 1em"}}>
                <TextField hintText="add a task" 
                style={{width: '98%'}}
                onEnterKeyDown={::this.addTodo}
                 />
              </span>
            </Tab>
            <Tab label="Active">
              <List data={data} type="active" />
            </Tab>
            <Tab label="Completed">
              <List data={data} type="completed" />
            </Tab>
          </Tabs>
        </Paper>
      </div>
    );
  }
}