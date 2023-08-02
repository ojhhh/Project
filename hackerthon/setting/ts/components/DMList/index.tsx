// import useSocket from '@hooks/useSocket';
import { CollapseButton } from '@components/DMList/styles';
import useSocket from '@hooks/useSocket';
import { IUser, IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';

const DMList: FC = () => {
    const { workspace } = useParams<{ workspace?: string }>();
    const { data: userData, error, mutate } = useSWR<IUser>('/api/users', fetcher, {
        dedupingInterval: 2000, // 2초
    });

    // hooks 로 컴포넌트 자체에서 바로 데이터를 가져올 수 있음 -> so, props 사용하지 않아도 됨. ⭐⭐⭐⭐⭐ 
    const { data: memberData } = useSWR<IUserWithOnline[]>(
        userData ? `/api/workspaces/${workspace}/members` : null,
        fetcher,
    );

    const [socket] = useSocket(workspace);

    const [channelCollapse, setChannelCollapse] = useState(false);
    const [onlineList, setOnlineList] = useState<number[]>([]);

    // 접었다, 폈다 하는 함수  
    const toggleChannelCollapse = useCallback(() => {
        setChannelCollapse((prev) => !prev);
    }, []);

    useEffect(() => {
        console.log('DMList: workspace 바꼈다', workspace);
        setOnlineList([]);
    }, [workspace]);


    // 다른 사람이 들어오면 -> 들어왔다고 불 켜주기 
    useEffect(() => {
        // 'onlineList 이벤트' 로 누가 온라인 인지 정보가 들어온다.
            socket?.on('onlineList', (data: number[]) => {
            setOnlineList(data);
            });
        // socket?.on('dm', onMessage);
        // console.log('socket on dm', socket?.hasListeners('dm'), socket);
        return () => {

            // 이벤트 를 off 해주는 기능 | 이벤트 on 이 있으면, 항상 off 가 있다는 것 
            // socket?.off('dm', onMessage);
            // console.log('socket off dm', socket?.hasListeners('dm'));
            socket?.off('onlineList');
        };
    }, [socket]);


    return (
        <>
        {/* 열리고 닫히는 버튼⭐⭐⭐  */}
        <h2>
            <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
                
            <i
                className="c-icon p-channel_sidebar__section_heading_expand c-icon--caret-right c-icon--inherit c-icon--inline"
                // className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
                data-qa="channel-section-collapse"
                aria-hidden="true"
            />
            </CollapseButton>
            <span>Direct Messages</span>
            
        </h2>
        <div>
            {/* 멤버 데이터를 가져와서  */}
            {!channelCollapse &&
            memberData?.map((member) => {
                const isOnline = onlineList.includes(member.id);
                return (
                
                <NavLink key={member.id} 
                    // NavLink 의 주소와 유저가 마우스 오버한 주소가 동일하면 -> 하얗게 보여줌
                    activeClassName="selected" 
                    to={`/workspace/${workspace}/dm/${member.id}`}>
                        
                        {/* 멤버 데이터 왼쪽에 있는 점들 넣어주기 
                            | 로그인 하면, 초록색 불이 들어옴*/}
                        <i
                        className={`c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence ${
                            // Online 이면 -> 초록색으로! 
                            isOnline ? 'c-presence--active c-icon--presence-online' : 'c-icon--presence-offline'
                        }`}
                        aria-hidden="true"
                        data-qa="presence_indicator"
                        data-qa-presence-self="false"
                        data-qa-presence-active="false"
                        data-qa-presence-dnd="false"
                        />
                        <span>{member.nickname}</span>
                        {/* 내 아이디에는 '(나)' 라고 표시 */}
                        {member.id === userData?.id && <span> (나)</span>}
                </NavLink>
                );
            })}
        </div>
        </>
    );
    };

export default DMList;
