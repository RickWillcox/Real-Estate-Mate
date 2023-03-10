/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { useCommBankData, useFadeElement } from "@src/hooks";
import "@components/App/App.css";
import "./bankEstimate.css";
import { LoadingDots } from "../LoadingDots";

export function BankEstimate() {
  const {
    data: { commBankPriceEval, commBankLink },
    loading,
  } = useCommBankData();

  const fadeInDisplayTextClass = useFadeElement({
    type: "in",
    fadeWhen: !loading,
  });

  const displayText = commBankPriceEval
    ? `$${commBankPriceEval}`
    : "Not Available";

  return (
    <div className="rem-sub-container">
      <h6 className="rem-sub-title">
        Comm Bank Est:{" "}
        <LoadingDots
          nameClass="rem-loading-bank-estimate"
          removeWhen={!loading}
        />
        <a
          className={`rem-sub-title-value-text rem-link ${fadeInDisplayTextClass}`}
          target="blank"
          href={commBankLink}
        >
          {displayText}
        </a>
      </h6>
    </div>
  );
}
