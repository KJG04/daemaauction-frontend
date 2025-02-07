import MyChat from "../MyChat/MyChat";
import YourChat from "../YourChat/YourChat";
import * as S from "./styles";
import Send from "../../../../assets/icons/send.svg";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import ChattingSkeleton from "./ChattingSkeleton/ChattingSkeleton";

interface PropsType {
  socket: Socket;
  roomId: string;
  userId: string;
  userName: string;
}

interface Msg {
  msg: string;
  senderId: string;
  senderName: string;
  time: string;
}

interface PrevMsg {
  context: string;
  id: string;
  writer: string;
  sendAt: string;
}

const Chatting = ({ socket, roomId, userId, userName }: PropsType) => {
  const [messages, setMessages] = useState<Msg[] | null>(null);
  const [content, setContent] = useState<string>("");

  useLayoutEffect(() => {
    setMessages(null);
    socket.emit("joinRoom", roomId);

    socket.on("chatMsgList", (data: PrevMsg[]) => {
      const msgList = data.map((value) => {
        const { context, id, sendAt, writer } = value;

        const v: Msg = {
          msg: context,
          senderId: id,
          senderName: writer,
          time: sendAt,
        };
        return v;
      });

      setMessages(msgList);
    });

    socket.emit("msgList", roomId);
  }, [roomId]);

  useLayoutEffect(() => {
    socket.on("msgToClient", (data: Msg) => {
      if (messages) setMessages(messages.concat(data));
    });
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages, roomId]);

  const renderMessage = (messages || []).map((value, index, array) => {
    const { msg, senderName, senderId } = value;

    const component = senderName === userName ? MyChat : YourChat;
    let isDiff = false;

    if (index !== 0) {
      const prevName = array[index - 1].senderName;

      isDiff = prevName !== senderName;
    }

    return (
      <>
        {isDiff && <S.ChatMargin key={`${index}${senderId}`} />}
        {React.createElement(component, { message: msg, key: index })}
      </>
    );
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSend = () => {
    if (content.length <= 0) {
      return;
    }

    socket.emit("msgToServer", { msg: content, userId: userId, roomId: roomId });
    setContent("");
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) onSend();
  };

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {!messages ? (
        <ChattingSkeleton />
      ) : (
        <S.ChattingContiner>
          <S.ChatTitleContainer>
            <S.TitleContaienr>
              <S.Bold>김진근</S.Bold>
            </S.TitleContaienr>
            <S.TitleLine />
          </S.ChatTitleContainer>
          <S.ChatContentContainer>
            <S.ChatContentContainerInner ref={containerRef}>
              {renderMessage}
            </S.ChatContentContainerInner>
          </S.ChatContentContainer>
          <S.ChatInputContainer>
            <S.InputContainer>
              <S.Input
                placeholder="내용을 입력해주세요."
                value={content}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
              />
              <S.SendButton onClick={onSend}>
                <img alt="send" src={Send} />
              </S.SendButton>
            </S.InputContainer>
          </S.ChatInputContainer>
        </S.ChattingContiner>
      )}
    </>
  );
};

export default Chatting;
