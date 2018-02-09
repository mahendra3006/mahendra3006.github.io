import React, {Component} from 'react';
import Project from "./Project";
var PieChart = require("react-chartjs").Pie;

export default class CompanyTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProject: props.projects[0].header
        }
    }

    render() {
        return (
            <div className="company-tile">
                <div className="flex-flow-1">
                    <img src={this.props.logo} className="company-logo"/>
                </div>
                <div className="flex-flow-1">
                    <PieChart ref={(ref) => this.PieChart = ref} onClick={this.onClickChart.bind(this)}
                              className="pie-chart" data={this.props.chartData}
                              options={this.props.chartOptions}/>
                </div>
                {this.props.projects.map((project) => {
                    return <Project header={project.header} domain={project.domain}
                                    className={this.state.selectedProject === project.header ? "flex-flow-2" : "hidden flex-flow-2"}>{project.description}</Project>
                })}
            </div>
        )
    }

    onClickChart() {
        if (this.PieChart.getChart().activeElements.length) {
            this.setState({selectedProject: this.PieChart.getChart().activeElements[0].label});
        }
    }
}
