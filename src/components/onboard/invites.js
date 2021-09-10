import { useContext, useState } from "react";
import { AppActions, AppContext, changeStep } from "../../providers/AppContextProvider";
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { roles, rolesId, steps } from "../../utils/constants";
import PrimaryButton from "../shared/components/buttons/primaryButton";
import Layout from "../shared/layout";
import BaseButton from "../shared/components/buttons/baseButton";
import { initialInvite } from "../../utils";

const HorizontalInputs = ({ id, invite }) => {
    return (
        <ClayInput.Group>
            <ClayInput.GroupItem>
                <label htmlFor={`inviteEmail-${id}`}>Email</label>
                <ClayInput className="bg-white rounded-lg border border-1" placeholder="username@superbank.com" type="text" id={`inviteEmail-${id}`} value={invite.email} />
            </ClayInput.GroupItem>
            <ClayInput.GroupItem>
                <label htmlFor={`inviteRole-${id}`}>Role</label>
                <ClaySelect className="bg-white rounded-lg border border-1" aria-label="Select Role" id={`inviteRole-${id}`} defaultValue={invite.roleId}>
                    {roles.map(item => (
                        <ClaySelect.Option
                            key={item.id}
                            label={item.name}
                            value={item.id}
                        />
                    ))}
                </ClaySelect>
            </ClayInput.GroupItem>
        </ClayInput.Group>
    );
};

const Invites = () => {
    const [state, dispatch] = useContext(AppContext);
    const [isClicked, setIsClicked] = useState(false);

    const addInitialInvite = () => {
        setIsClicked(true);

        dispatch({
            type: AppActions.UPDATE_INVITES,
            payload: [...state.form.invites, initialInvite(rolesId.watcher)]
        });
    }

    return (
        <Layout
            footerProps={{
                leftButton: <BaseButton text={"Skip for now"} onClick={() => console.log('Skipped')} />,
                middleButton: <PrimaryButton text={"Send Invitations"} onClick={() => dispatch(changeStep(steps.roles))} />
            }}
            headerProps={{
                title: "Invite Your Team Members",
                subtitle: "Team members will receive an email invitation to access this project on Customer Portal.",
            }}
        >
            <div className="invites-form px-4 pb-3">
                <ClayForm.Group className="m-0">
                    {state.form.invites.map((invite, index) => (<HorizontalInputs key={index} id={index} invite={invite} />))}
                </ClayForm.Group>
                <BaseButton disabled={state.form.invites.length > 5} preffixIcon="plus" styles="text-primary py-2 mt-3" text="Add More Members" onClick={() => addInitialInvite()} />
            </div>
            <div className={`px-4 ${isClicked ? "bottom-content" : ""}`}>
                <hr className={`mt-0 ${isClicked ? "invisible" : ""}`} />
                <div className="text-content">
                    Only 3 members per project (including yourself) have role permissions (Admins & Requestors) to open Support tickets.
                </div>
            </div>
        </Layout>
    );
};

export default Invites;
