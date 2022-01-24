import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.boardNum),
        },
      });
      alert('삭제가 완료되었습니다!');

      router.push(`/boards/list`);
    } catch (e) {
      console.log(e.massage);
    }
  };
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardNum,
    },
  });
  console.log(data);
  const onClickMoveToList = () => {
    router.push('/boards');
  };
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.boardNum}/edit`);
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickDelete={onClickDelete}
        onClickMoveToList={onClickMoveToList}
        onClickMoveToEdit={onClickMoveToEdit}
      />
    </>
  );
}
