import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ApplicationState} from '../../store'
import { Repository } from '../../store/ducks/repositories/types'
import {bindActionCreators, Dispatch} from 'redux'
import * as RepositoriesAction from '../../store/ducks/repositories/actions'

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps{
    loadRequest: Function

}

// interface OwnProps {

// }

type Props = StateProps & DispatchProps // & OwnProps

class RepositoryList extends Component<Props> {

    componentDidMount = () => {
        // const {loadRequest} = this.props
        // loadRequest()
    }


    render() {
        const {repositories} = this.props
        
        return (
            <div>
                {repositories.map(repository => <h2>{repository.name}</h2>)}
            </div>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    bindActionCreators(RepositoriesAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
