import React from 'react'
import Button from '@atlaskit/button'
import styled, { css } from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
import TrashIcon from '@atlaskit/icon/glyph/trash'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover {
        ${ (p) => p.isCompleted && css `
        text-decoration: line-through;
    `}
    }

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon {
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }
`;

export default function Todo({ todo, onCheckBtnClick, onTrashBtnClick}) {
    return <ButtonStyled isCompleted={todo.isCompleted} shouldFitContainer iconBefore={
        <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}><CheckIcon primaryColor='4ffff4'></CheckIcon></span>
    } iconAfter={<span className='trash-icon' onClick={() => onTrashBtnClick(todo.id)}><TrashIcon primaryColor='4ffff4'></TrashIcon></span>}>{todo.name}</ButtonStyled>
}
