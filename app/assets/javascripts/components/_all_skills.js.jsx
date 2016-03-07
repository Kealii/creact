var AllSkills = React.createClass({
    getInitialState() {
        return { skills: [] }
    },

    componentDidMount() {
        $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
    },

    handleDelete(id) {
        this.props.handleDelete(id);
    },

    handleEdit() {
       console.log('you are in edit');
    },

    render() {
        var skills = this.props.skills.map((skill) => {
            return (
                <div key={skill.id} className="well">
                    <Skill skill={skill}
                           handleDelete={this.handleDelete.bind(this, skill.id)}
                           handleEdit={this.handleEdit}/>
                </div>
            )
        });

        return (
            <div>
                <h1>{skills}</h1>
            </div>
        )
    }
});