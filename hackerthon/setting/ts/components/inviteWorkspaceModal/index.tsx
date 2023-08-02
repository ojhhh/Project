import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { Button, Input, Label } from '@pages/SignUp/style';
import { IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';

interface Props {
    show: boolean;
    onCloseModal: () => void;
    setShowInviteWorkspaceModal: (flag: boolean) => void;
}

const InviteWorkspaceModal: FC<Props> = ({ show, onCloseModal, setShowInviteWorkspaceModal }) => {
    const { workspace } = useParams<{ workspace: string; channel: string }>();
    const [newMember, onChangeNewMember, setNewMember] = useInput('');
    const { data: userData } = useSWR<IUser>('/api/users', fetcher);
    const { mutate: revalidateMember } = useSWR<IUser[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
    );

    
    const onInviteMember = useCallback(
        (e) => {
            e.preventDefault();

            // input 창에 꼭 적어주도록 검사
            if (!newMember || !newMember.trim()) {
                return;
            }

            axios
            .post(`/api/workspaces/${workspace}/members`, {
                email: newMember,
            })
            .then(() => {
                // 초대가 완료되면, revalidate(mutate) 로 -> 멤버 리스트틑 다시 불러온다. 
                revalidateMember();
                
                // 초대완료되면 모달창 닫는다. 
                setShowInviteWorkspaceModal(false);

                // 입력창을 초기화 한다. 그래서, 다음 멤버를 초대할 때 '공란' 이 된다.
                setNewMember('');
            })
            .catch((error) => {
                console.dir(error);
                toast.error(error.response?.data, { position: 'bottom-center' });
            });
        },
        [newMember, workspace, revalidateMember, setShowInviteWorkspaceModal, setNewMember],
        );

    return (
        <Modal show={show} onCloseModal={onCloseModal}>

            {/* 모달에, 이메일을 받아서, 초대하기 누르면 -> onInviteMember 실행*/}
            <form onSubmit={onInviteMember}>
                <Label id="member-label">
                <span>이메일</span>
                <Input id="member" type="email" value={newMember} onChange={onChangeNewMember} />
                </Label>
                <Button type="submit">초대하기</Button>
            </form>

        </Modal>
    );
    };

export default InviteWorkspaceModal;
