import { Component, ReactNode, createElement } from "react";

import { Badge } from "./components/Badge";
import { BadgeStyle } from "./ui/styles";
import { PopupBannerProps } from "../typings/PopupBannerProps";

export class PopupBanner extends Component<PopupBannerProps<BadgeStyle>> {
    private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <Badge
                style={this.props.style}
                onClick={this.onClickHandler}
                value={this.props.value?.displayValue || "Default"}
            />
        );
    }

    private onClick(): void {
        const { onClick } = this.props;

        if (onClick && onClick.canExecute && !onClick.isExecuting) {
            onClick.execute();
        }
    }
}
