/**
 * This file was generated from PopupBanner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface PopupBannerProps<Style> {
    name: string;
    style: Style[];
    value?: EditableValue<string | Big>;
    onClick?: ActionValue;
}

export interface PopupBannerPreviewProps {
    class: string;
    style: string;
    value: string;
    onClick: {} | null;
}
