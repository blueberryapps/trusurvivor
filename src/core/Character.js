import compose from '@stamp/it'

const Character = compose({
  init({ name, faction }) {
    this.name = name
    this.faction = faction
  },
  props: {
    skills: [],
  },
  statics: {
    withSkills,
  },
})

function withSkills(skills) {
  return this.props({ skills })
}

export default Character
