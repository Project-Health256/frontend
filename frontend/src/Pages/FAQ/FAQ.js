import { LinkableIconCard } from './Linkable-Icon-Card';
import React from 'react'
import { LinkButton } from '../../components/LinkButton/Link-Button'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <div>
      <LinkButton pathName="/signup" text="Sign Up" />
    <LinkableIconCard     />
    </div>
  )
}
