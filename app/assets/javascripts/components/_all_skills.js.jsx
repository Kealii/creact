var AllSkills = React.createClass({
    getInitialState() {
        return { skills: [] }
    },

    componentDidMount() {
        $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
    },

    render() {
        var skills = this.props.skills.map((skill) => {
            return (
                <div key={skill.id} className="well">
                    <p>{skill.name}</p>
                    <h3><strong>Level: </strong>{skill.level}</h3>
                    <h3>{skill.details}</h3>
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