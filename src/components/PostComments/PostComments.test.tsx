import { render, screen, fireEvent } from '@testing-library/react';
import PostComment from '.';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

it('Deve adicionar dois comentários corretamente e contar o número de mensagens', () => {
render(<Post />)

const textarea = screen.getByTestId('post-comments-form-textarea')
const button = screen.getByTestId('post-comments-form-button')

fireEvent.change(textarea, {target: {value: 'Primeiro comentário'}})
fireEvent.click(button)

fireEvent.change(textarea, {target: {value: 'Segundo comentário'}})
fireEvent.click(button) 

expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
expect(screen.getByText('Segundo comentário')).toBeInTheDocument()

const commentElements = screen.getAllByTestId('comment-element')
expect(commentElements).toHaveLength(2)
})


