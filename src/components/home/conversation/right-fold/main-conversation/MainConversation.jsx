import React from 'react'
import { useParams } from 'react-router-dom';

export default function MainConversation() {
    const { id } = useParams();
  return (
    <div>MainConversation with id {id}</div>
  )
}
