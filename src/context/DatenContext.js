import React from "react"

const defaultState = {
  ein: false,
  toggleEinverstanden: () => {},
}

const DatenContext = React.createContext(defaultState)


class DatenProvider extends React.Component {
  state = {
    ein: 0,
  }

  toggleEinverstanden = (props) => {
    let ein = !this.state.ein
    localStorage.setItem("einverstanden", JSON.stringify(ein))
    this.setState({ ein })
    console.log(props)
  }

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const ein = JSON.parse(localStorage.getItem("einverstanden"))
    if (ein) {
      this.setState({ ein: ein })
    }
  }

  render() {
    const { children } = this.props
    const { ein } = this.state
    return (
      <DatenContext.Provider
        value={{
          ein,
          toggleEinverstanden: this.toggleEinverstanden,
        }}
      >
        {children}
      </DatenContext.Provider>
    )
  }
}

export default DatenContext

export { DatenProvider }
