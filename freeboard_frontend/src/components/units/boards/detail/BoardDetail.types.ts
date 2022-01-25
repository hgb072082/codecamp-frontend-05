import React from "react";
export interface IBoardDetailUIProps {
  data: any;
  onClickDelete: (event: React.MouseEvent) => void;
  onClickMoveToList: (event: React.MouseEvent) => void;
  onClickMoveToEdit: (event: React.MouseEvent) => void;
  onClickLikeUpdate: () => void;
  onClickDisLikeUpdate: () => void;
}
