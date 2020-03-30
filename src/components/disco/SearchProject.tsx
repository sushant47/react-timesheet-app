import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

interface projectList {
    projectList: projectListItem[];
    filterName: string;
}
interface projectListItem {
    project_id: number;
    project_name: string;
}
export class SearchProject extends Component<projectList, projectList> {

    constructor(props: projectList) {
        super(props);
        this.state = {
            projectList: props.projectList,
            filterName: props.filterName
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showDiv = this.showDiv.bind(this);
    }
    componentDidMount() {

    }
    handleChange(event: any) {
        console.log(event.target.value);
        let currentList = [];

        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (event.target.value !== "") {
            // Assign the original list to currentList
            currentList = this.props.projectList;

            // Use .filter() to determine which items should be displayed
            // based on the search terms
            newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.project_name.toLowerCase();
                // change search term to lowercase
                const filter = event.target.value.toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
                return lc.includes(filter);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.projectList;
        }
        this.setState({
            projectList: newList
        });
    }
    handleClick(project_id: string) {
        console.log(project_id);
    }
    showDiv(event: any) {
        event.persist();
        console.log(event);
        this.setState({filterName: event.target.value})
        console.log(this.state);
        // document.getElementById('divId').style.display = event.target.value == 1 ? 'flex' : 'none';
    }
    render() {
        const newData = this.state.projectList.map((data) => {
            return (
                <li key={data.project_id.toString()} onClick={() => this.handleClick(data.project_id.toString())}>
                    {data.project_name}
                </li>
            )
        })
        return (
            <div className="sidebar">
                <div className="project-search">
                    {/* <input type="text" placeholder="Search Teams" /> */}
                    <div>
                        <input type="text" className="input" placeholder="Search..." onChange={this.handleChange} />
                        {/* <ListGroup variant="flush">
                            {newData}
                        </ListGroup> */}
                    </div>
                    <div className="filters">
                        <select value={this.state.filterName} name='filter' onChange={this.showDiv}>
                            <option value="filters">Filters</option>
                            <option value="7">Last 7 days</option>
                            <option value="30">Last 30 days</option>
                            <option value="1">Select Dates</option>
                        </select>
                        <div id="show-from-to" style={{display: this.state.filterName === '1' ?  'flex' : 'none'}}>
                            <select>
                                <option>From</option>
                            </select>
                            <select>
                                <option>To</option>
                            </select>
                        </div>
                    </div>
                </div>
                <ul>
                    {newData}
                </ul>
                {/* <ListGroup variant="flush">
                    {newData}
                </ListGroup> */}
            </div>
            // <div>
            //     <input type="text" className="input" placeholder="Search..." onChange={this.handleChange} />
            //     <ListGroup variant="flush">
            //         {newData}
            //     </ListGroup>
            // </div>
        )
    }
}