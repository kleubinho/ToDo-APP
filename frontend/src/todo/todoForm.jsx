import React, {Component} from "react";
import { connect } from "react-redux";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { bindActionCreators } from "redux";
import { changeDescription, search } from "./todoActions";

const todoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

class TodoForm extends Component {
  constructor(props){
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
}

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          onChange={props.changeDescription}
          placeholder="Adicione uma tarefa"
          onKeyDown={keyHandler}
          value={props.description}
        />
      </Grid>
 
      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription, search }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
