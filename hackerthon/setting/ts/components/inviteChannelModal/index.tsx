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
    setShowInviteChannelModal: (flag: boolean) => void;
}
const InviteChannelModal: FC<Props> = ({ show, onCloseModal, setShowInviteChannelModal }) => {
    const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
    const [newMember, onChangeNewMember, setNewMember] = useInput('');
    const { data: userData } = useSWR<IUser>('/api/users', fetcher);
    
    const { mutate: revalidateMembers } = useSWR<IUser[]>( 
        userData ? `/api/workspaces/${workspace}/channels/${channel}/members` : null,
        fetcher,
    );


    const onInviteMember = useCallback(
        (e) => {
        // 이벤트 버블링 막아주기
        e.preventDefault();

        // input 입력하도록. 안 넣으면 되돌아가게
        if (!newMember || !newMember.trim()) {
            return;
        }

        // 받아온 정보로 post 요청 보내기
        axios
            .post(`/api/workspaces/${workspace}/channels/${channel}/members`, {
            email: newMember,
            })
            .then(() => {
            // 요청이 성공하면 -> 추가된 멤버가 반영될 수 있게 '요청' 을 한번 더 보내기
                // -> 그래서 다시 그려질 수 있게  
            revalidateMembers();

            // 성공했으면 모달창 닫기
            setShowInviteChannelModal(false);

            // 인풋창을 공란으로 비워서 다음 사람기입할 수 있게 하기
            setNewMember('');
            })
            .catch((error) => {
            console.dir(error);
            // 사용자 입장에서, 가운데 + 아래에서 오류창 올라올 수 있게 하기
            toast.error(error.response?.data, { position: 'bottom-center' });
            });
        },
        [channel, newMember, revalidateMembers, setNewMember, setShowInviteChannelModal, workspace],
    );

    return (
        <Modal show={show} onCloseModal={onCloseModal}>
        
        {/* 초대하기 버튼 누르면 -> onInviteMember 함수 실행 */}
        <form onSubmit={onInviteMember}>
            <Label id="member-label">
            <span>채널 멤버 초대</span>
            <Input id="member" value={newMember} onChange={onChangeNewMember} />
            </Label>
            <Button type="submit">초대하기</Button>
        </form>
        </Modal>
    );
    };

export default InviteChannelModal;
