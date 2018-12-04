import React, { Component } from 'react';
import Select from 'react-virtualized-select';
import {GetWorkFlowIDs} from '../actions/index';
import createFilterOptions from 'react-select-fast-filter-options';
import {connect} from 'react-redux';

let options = [];


class WorkFlowsSearchBar extends Component{


    constructor(props) {
        super(props);
        
        this.state={SelectedWF:''

                    };

       
        
      }

    

    componentDidMount(){

        //action creator to fetch all categories for PackagesSearchBar
        this.props.GetWorkFlowIDs();
    }

    componentWillReceiveProps(nextProps) {

        let workflowsArray=nextProps.workflows;
        if(workflowsArray.length > 0 && this.props.workflows !== nextProps.workflowsArray)
            {

                options= workflowsArray;
                this.forceUpdate();

            }


    }

render(){

    const filterOptions = createFilterOptions({ options });
    

    return(

        <span>
            
                <Select
                    name="WorkFlow ID"
                    value={this.state.SelectedWF}
                    options={this.props.workflowsArray}
                    filterOptions={filterOptions}
                    onChange={val => {
                        
                        if (val){
                            this.setState({SelectedWF:val});
                        }
                        
                        }}
                    placeholder="Select Workflow"
                    isMulti="true"
                    className="WFSearchBar"
                />
            
            
              
        </span>
    );
}

}

function mapStateToProps({workflows})
{
    return {workflows};
}

export default connect (mapStateToProps, {GetWorkFlowIDs}) (WorkFlowsSearchBar);