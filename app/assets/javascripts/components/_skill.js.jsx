var Skill = React.createClass({
    getInitialState() {
        return { editable: false }
    },

    handleEdit() {
        if (this.state.editable) {
            var name    = this.refs.name.value;
            var details = this.refs.details.value;
            console.log('in handleEdit', this.state.editable, name, details);
        }
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var name = this.state.editable ? <input type='text' defaultValue={this.props.skill.name} />
            : <p>{this.props.skill.name}</p>;

        var details = this.state.editable ? <textarea type='text' defaultValue={this.props.skill.details}></textarea>
            : <h3>{this.props.skill.details}</h3>;

        return (
            <div>
                {name}
                <h3><strong>Level:</strong> {this.props.skill.level}</h3>
                {details}
                <button className="btn btn-success" onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
                <button className="btn btn-danger" onClick={this.props.handleDelete.bind(this, this.props.skill.id)}>Delete</button>
            </div>
        )
    }


});
