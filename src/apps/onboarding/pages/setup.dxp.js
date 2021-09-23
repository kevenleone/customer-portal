import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useContext } from 'react';
import { BaseButton, PrimaryButton } from '../../../shared/components/buttons';
import { AppContext } from '../context';
import { ActionTypes } from '../context/actions';
import { initialDxpAdmin } from '../utils';
import { roles } from '../utils/constants';
import Layout from './layout';

const HorizontalInputs = ({ id, admin }) => {
    return (
        <>
            <hr />
            <div className="dxp-form">
                <label htmlFor="adminEmail">System Admin’s Email Address</label>
                <ClayInput className="bg-white rounded-lg border border-1" placeholder="username@superbank.com" type="email" id="adminEmail" />
            </div>
            <ClayInput.Group>
                <ClayInput.GroupItem>
                    <label htmlFor="adminFirstName">System Admin’s First Name</label>
                    <ClayInput className="bg-white rounded-lg border border-1" type="text" id="adminFirstName" />
                </ClayInput.GroupItem>
                <ClayInput.GroupItem>
                    <label htmlFor="adminLastName">System Admin’s Last Name</label>
                    <ClayInput className="bg-white rounded-lg border border-1" type="text" id="adminLastName" />
                </ClayInput.GroupItem>
            </ClayInput.Group>
            <label htmlFor="adminGithub">System Admin’s Github Username</label>
            <ClayInput className="bg-white rounded-lg border border-1" type="text" id="adminGithub" />
        </>
    );
}

const SetupDXP = () => {
    const [state, dispatch] = useContext(AppContext);

    const addInitialAdmin = () => {
        dispatch({
            type: ActionTypes.UPDATE_ADMINS,
            payload: [...state.form.setUpDxp.admins, initialDxpAdmin()]
        });
    }

    return (
        <Layout
            footerProps={{
                leftButton: <BaseButton text={"Skip for now"} onClick={() => console.log('Skipped')} />,
                middleButton: <PrimaryButton text={"Submit"} onClick={() => console.log("Lambda, Labda!")} />
            }}
            headerProps={{
                title: "Set up DXP Cloud",
                subtitle: "We’ll need a few details to finish building your DXP environment(s).",
            }}
        >
            <div className="px-4 h-100">
                <div className="d-flex justify-content-between dxp">
                    <div>
                        <div className="title-dxp mb-1">
                            Organization Name
                        </div>
                        <div className="content-dxp">
                            {state.dxp.organization}
                        </div>
                    </div>
                    <div className="dxp-version">
                        <div className="title-dxp mb-1">
                            Liferay DXP Version
                        </div>
                        <div className="content-dxp">
                            {state.dxp.version}
                        </div>
                    </div>
                </div>
                <ClayForm.Group className="m-0">
                    <div className="dxp-form">
                        <label htmlFor="projectId">Project ID</label>
                        <ClayInput className="bg-white rounded-lg border border-1" placeholder="superbank1" type="text" id="projectId" />
                        <div className="text-content ml-3 mt-1">
                            Lowercase letters and numbers only. Project IDs cannot be changed.
                        </div>
                    </div>
                    <label htmlFor="inviteRole">Primary Data Center Region</label>
                    <ClaySelect className="bg-white rounded-lg border border-1" aria-label="Select Region" id="inviteRole">
                        {roles.map(item => (
                            <ClaySelect.Option
                                key={item.id}
                                label={item.name}
                                value={item.id}
                            />
                        ))}
                    </ClaySelect>
                    {state.form.setUpDxp.admins.map((admin, index) => (<HorizontalInputs key={index} id={index} admin={admin} />))}
                </ClayForm.Group>
                <BaseButton preffixIcon="plus" styles="text-primary py-2 my-3" text="Add Another Admin" onClick={() => addInitialAdmin()} />
            </div>
        </Layout>
    );
};

export default SetupDXP;
