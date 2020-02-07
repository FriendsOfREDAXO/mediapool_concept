<?php

if (rex::isBackend()) {
    rex_extension::register('PAGE_TITLE_SHOWN', 'MediapoolConcept::getOutput');
    rex_view::addCssFile($this->getAssetsUrl('css/mediapool_concept.css'));
	rex_view::addJsFile($this->getAssetsUrl('js/mediapool_concept.js'));
}