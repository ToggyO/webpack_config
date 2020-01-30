import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { authActions, authSelectors } from '@store/auth';
import { FormValues, PropsFromDispatch, PropsFromState } from '@pages/LoginPage/intefaces';
import { ApplicationState } from '@store';
import LoginPageView from './LoginPageView';


const mapStateToProps = (state: ApplicationState): PropsFromState => ({
	errorsFromBackend: authSelectors.errorSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => {
	return {
		login(data: FormValues) {
			dispatch(authActions.login(data));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPageView);