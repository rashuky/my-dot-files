import { CancellationToken, Hover, HoverProvider, Position, TextDocument, workspace, WorkspaceConfiguration } from "vscode";
import * as definitions from "./definitions/index";

export
class ASN1HoverProvider implements HoverProvider {
	private asn1Config = null;

	constructor(asn1Config?: WorkspaceConfiguration) {
		this.asn1Config = asn1Config;
	}

    public provideHover(document: TextDocument, position: Position, token: CancellationToken) : Thenable<Hover> {
        if (!this.asn1Config) this.asn1Config = workspace.getConfiguration("asn1", document.uri);
        return new Promise<Hover>((resolve, reject) => {
            const wordRange = document.getWordRangeAtPosition(position);
            const word : string = document.getText(wordRange);
            switch (word) {

                // Booleans
                case "TRUE": return resolve(new Hover(definitions.TRUE_DEFINITION));
                case "FALSE": return resolve(new Hover(definitions.FALSE_DEFINITION));

                // Tag Classes
                case "UNIVERSAL": return resolve(new Hover(definitions.UNIVERSAL_DEFINTION));
                case "PRIVATE": return resolve(new Hover(definitions.PRIVATE_DEFINTION));
                case "APPLICATION": return resolve(new Hover(definitions.APPLICATION_DEFINTION));
                case "CONTEXT": return resolve(new Hover(definitions.CONTEXT_SPECIFIC_DEFINTION));

                // Constraints
                case "SIZE": return resolve(new Hover(definitions.SIZE_DEFINITION));
                case "COMPONENT": return resolve(new Hover(definitions.WITH_COMPONENT_DEFINITION));
                case "COMPONENTS": return resolve(new Hover(definitions.WITH_COMPONENTS_DEFINITION));
                case "PATTERN": return resolve(new Hover(definitions.PATTERN_DEFINITION));
                case "INCLUDES": return resolve(new Hover(definitions.INCLUDES_DEFINITION));
                case "FROM": return resolve(new Hover(definitions.FROM_DEFINITION));
                case "PRESENT": return resolve(new Hover(definitions.PRESENT_DEFINITION));
                case "ABSENT": return resolve(new Hover(definitions.ABSENT_DEFINITION));
                case "ENCODED": return resolve(new Hover(definitions.ENCODED_BY_DEFINITION));
                // case "ALL EXCEPT": return resolve(new Hover(definitions.));
                case "INTERSECTION": return resolve(new Hover(definitions.INTERSECTION_DEFINITION));
                case "UNION": return resolve(new Hover(definitions.UNION_DEFINITION));
                case "EXCEPT": return resolve(new Hover(definitions.EXCEPT_DEFINITION));
                case "CONSTRAINED": return resolve(new Hover(definitions.CONSTRAINED_BY_DEFINITION));
                case "DEFAULT": return resolve(new Hover(definitions.DEFAULT_DEFINITION));
                case "OPTIONAL": return resolve(new Hover(definitions.IMPLICIT_DEFINITION));

                // Mode
                case "EXPLICIT": return resolve(new Hover(definitions.EXPLICIT_DEFINITION));
                case "IMPLICIT": return resolve(new Hover(definitions.IMPLICIT_DEFINITION));

                // Module
                case "DEFINITIONS": return resolve(new Hover(definitions.DEFINITIONS_DEFINITION));
                case "BEGIN": return resolve(new Hover(definitions.BEGIN_DEFINITION));
                case "END": return resolve(new Hover(definitions.END_DEFINITION));
                case "IMPORTS": return resolve(new Hover(definitions.IMPORTS_DEFINITION));
                case "EXPORTS": return resolve(new Hover(definitions.EXPORTS_DEFINITION));
                // case "EXPLICIT TAGS": return resolve(new Hover(definitions.));
                // case "IMPLICIT TAGS": return resolve(new Hover(definitions.));
                case "AUTOMATIC": return resolve(new Hover(definitions.AUTOMATIC_TAGS_DEFINITION));
                case "EXTENSIBILITY":
                case "IMPLIED": return resolve(new Hover(definitions.EXTENSIBILITY_IMPLIED_DEFINITION));
                case "TAGS": return resolve(new Hover(definitions.TAGS_DEFINITION));

                // Universal Types
                // case "END OF CONTENT": return resolve(new Hover(definitions.));
                case "BOOLEAN": return resolve(new Hover(definitions.BOOLEAN_DEFINITION));
                case "INTEGER": return resolve(new Hover(definitions.INTEGER_DEFINITION));
                case "BIT": return resolve(new Hover(definitions.BIT_STRING_DEFINITION));
                case "OCTET": return resolve(new Hover(definitions.OCTET_STRING_DEFINITION));
                case "NULL": return resolve(new Hover(definitions.NULL_DEFINITION));
                case "OBJECT":
                case "IDENTIFIER": return resolve(new Hover(definitions.OBJECT_IDENTIFIER_DEFINITION));
                case "ObjectDescriptor": return resolve(new Hover(definitions.OBJECT_DESCRIPTOR_DEFINITION));
                case "EXTERNAL":
                case "External": return resolve(new Hover(definitions.EXTERNAL_DEFINITION));
                case "REAL": return resolve(new Hover(definitions.REAL_DEFINITION));
                case "EMBEDDED":
                case "PDV":
                case "EmbeddedPDV": return resolve(new Hover(definitions.EMBEDDED_PDV_DEFINITION));
                case "UTF8String": return resolve(new Hover(definitions.UTF8_STRING_DEFINITION));
                case "RELATIVE-OID": return resolve(new Hover(definitions.RELATIVE_OID_DEFINITION));
                case "SEQUENCE": return resolve(new Hover(definitions.SEQUENCE_DEFINITION));
                case "SET": return resolve(new Hover(definitions.SET_DEFINITION));
                case "NumericString": return resolve(new Hover(definitions.NUMERIC_STRING_DEFINITION));
                case "PrintableString": return resolve(new Hover(definitions.PRINTABLE_STRING_DEFINITION));
                case "TeletexString":
                case "T61String": return resolve(new Hover(definitions.T61_STRING_DEFINITION));
                case "VideotexString": return resolve(new Hover(definitions.VIDEOTEX_STRING_DEFINITION));
                case "ISO646String":
                case "IA5String": return resolve(new Hover(definitions.IA5_STRING_DEFINITION));
                case "UTCTime": return resolve(new Hover(definitions.UTC_TIME_DEFINITION));
                case "GeneralizedTime": return resolve(new Hover(definitions.GENERALIZED_TIME_DEFINITION));
                case "GraphicString": return resolve(new Hover(definitions.GRAPHIC_STRING_DEFINITION));
                case "VisibleString": return resolve(new Hover(definitions.VISIBLE_STRING_DEFINITION));
                case "GeneralString": return resolve(new Hover(definitions.GENERAL_STRING_DEFINITION));
                case "UniversalString": return resolve(new Hover(definitions.UNIVERSAL_STRING_DEFINITION));
                case "CharacterString": return resolve(new Hover(definitions.CHARACTER_STRING_DEFINITION));
                case "BMPString": return resolve(new Hover(definitions.BMP_STRING_DEFINITION));
                case "CHOICE": return resolve(new Hover(definitions.CHOICE_DEFINITION));
                case "DATE": return resolve(new Hover(definitions.DATE_DEFINITION));
                case "DATE-TIME": return resolve(new Hover(definitions.DATE_TIME_DEFINITION));
                case "TIME": return resolve(new Hover(definitions.TIME_DEFINITION));
                case "TIME-OF-DAY": return resolve(new Hover(definitions.TIME_OF_DAY_DEFINITION));
                // case "INSTANCE OF": return resolve(new Hover(definitions.));
                // case "SEQUENCE OF": return resolve(new Hover(definitions.));
                // case "SET OF": return resolve(new Hover(definitions.));

                // Values
                case "MIN": return resolve(new Hover(definitions.MIN_DEFINITION));
                case "MAX": return resolve(new Hover(definitions.MAX_DEFINITION));
                case "PLUS-INFINITY": return resolve(new Hover(definitions.PLUS_INFINITY_DEFINITION));
                case "MINUS-INFINITY": return resolve(new Hover(definitions.MINUS_INFINITY_DEFINITION));
                case "NOT-A-NUMBER": return resolve(new Hover(definitions.NOT_A_NUMBER_DEFINITION));

                default: return reject(null);
            }
        });
    }
}