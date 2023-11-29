import React, { useMemo } from 'react'
import './Mode.css';
import {Row} from '../Flex/Row';
import { Column } from '../Flex/Column';

export type ModeProps = {
  environment: "prod" | "dev" | "qa" | "uat";
}

export function Mode ({ environment="dev" }: ModeProps) {

  const text = useMemo(() => {
    switch (environment) {
      case "dev":
        return "Developer Mode"
        case "qa":
        return "QA Mode"
        case "uat":
        return "UAT Mode"
      default:
        return ""
    }
  }, [environment])

  return (
    <Column>
      <Row>
        <span className='text-mode'>{text}</span>
      </Row>
    </Column>
  );
}
