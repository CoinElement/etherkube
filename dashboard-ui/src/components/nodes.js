import React from 'react';
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import log from 'loglevel';

const Render = ({nodes}) => {

    const shortStyle = { width: 12 };
    const wideStyle = { width: 120 };

    var table = <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn style={shortStyle}>ID</TableHeaderColumn>
                <TableHeaderColumn style={shortStyle}>Since</TableHeaderColumn>
                <TableHeaderColumn style={shortStyle}>Height</TableHeaderColumn>
                <TableHeaderColumn style={wideStyle}>Hash</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {nodes.map( (node) => {
            return (
                <TableRow key={node.service.metadata.uid} selectable={false}>
                    <TableRowColumn style={shortStyle}>{node.service.metadata.name}</TableRowColumn>
                    <TableRowColumn style={shortStyle}>{node.service.metadata.creationTimestamp}</TableRowColumn>
                    <TableRowColumn style={shortStyle}>{node.height}</TableRowColumn>
                    <TableRowColumn style={wideStyle}>{typeof(node.block) === 'object' ? node.block.hash : ''}</TableRowColumn>
                </TableRow>
            );
            })}
        </TableBody>
    </Table>;



    return (
        <div id="nodes">
            <h2>Nodes</h2>
            {table}
        </div>
    )
};

const NodesList = connect(
    (state, ownProps) => {
        return {
            nodes: state.nodes.has('items') ? state.nodes.get('items').toJS() : [],
        }
    },
    (dispatch, ownProps) => {
        return {}
    }
)(Render);


export default NodesList