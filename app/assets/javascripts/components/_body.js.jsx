var Body = React.createClass({
    getInitialState() {
        return { skills: [] }
    },

    componentDidMount() {
        $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
    },

    handleDelete(id) {
        $.ajax({
            url: `/api/v1/skills/${id}`,
            type: 'DELETE',
            success: () => {
                this.removeSkillFromDOM(id);
            }
        });
    },

    removeSkillFromDOM(id) {
        var newSkills = this.state.skills.filter((skill) => {
            return skill.id != id;
        });

        this.setState({ skills: newSkills })
    },

    handleSubmit(skill) {
        console.log(skill);
    },

    render() {
        return (
            <div>
                <NewSkill handleSubmit = {this.handleSubmit} />
                <AllSkills skills = {this.state.skills} handleDelete={this.handleDelete} />
            </div>
        )
    }
});