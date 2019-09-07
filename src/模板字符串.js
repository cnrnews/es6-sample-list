const team = {
    members: ['李伟', '张三'],
    teamName:'es6',
    teamSummery: function () {
        return this.members.map((member) => {
            return `${member}隶属于${this.teamName}小组`
        })
    }
}
console.log(team.teamSummery())