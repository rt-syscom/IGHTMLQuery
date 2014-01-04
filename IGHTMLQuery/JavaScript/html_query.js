/* Generated by Opal 0.5.5 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $module = $opal.module;
  $opal.add_stubs(['$attr_reader', '$include', '$new']);
  return (function($base, $super) {
    function $XMLNode(){};
    var self = $XMLNode = $klass($base, $super, 'XMLNode', $XMLNode);

    var def = $XMLNode._proto, $scope = $XMLNode._scope, $a;
    self.$attr_reader("native");

    def.$initialize = function(native$) {
      var self = this;
      return self['native'] = native$;
    };

    (function($base) {
      var self = $module($base, 'Core');

      var def = self._proto, $scope = self._scope;
      def.$tag = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].tag();
      };

      def['$tag='] = function(tag) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        
        self['native'].setTag(tag)
        return self['native'].tag()
      ;
      };

      def.$text = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].text();
      };

      def['$text='] = function(text) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        
        self['native'].setText(text)
        return self['native'].text()
      ;
      };

      def.$xml = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].xml();
      };

      def.$inner_xml = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].innerXml();
      };

      def.$last_error = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].lastError();
      };

      def.$remove_namespaces = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].removeNamespaces();
      };

      def.$to_n = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'];
      };
            ;$opal.donate(self, ["$tag", "$tag=", "$text", "$text=", "$xml", "$inner_xml", "$last_error", "$remove_namespaces", "$to_n"]);
    })(self);

    self.$include((($a = $scope.Core) == null ? $opal.cm('Core') : $a));

    (function($base) {
      var self = $module($base, 'Traversal');

      var def = self._proto, $scope = self._scope;
      def.$parent = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a).$new(self['native'].parent());
      };

      def.$next_sibling = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a).$new(self['native'].nextSibling());
      };

      def.$previous_sibling = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a).$new(self['native'].previousSibling());
      };

      def.$children = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNodeSet) == null ? $opal.cm('XMLNodeSet') : $a).$new(self['native'].children());
      };

      def.$first_child = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNodeSet) == null ? $opal.cm('XMLNodeSet') : $a).$new(self['native'].firstChild());
      };

      def.$unique_key = function() {
        var $a, self = this;
        if (self['native'] == null) self['native'] = nil;

        return (($a = $scope.XMLNodeSet) == null ? $opal.cm('XMLNodeSet') : $a).$new(self['native'].uniqueKey());
      };
            ;$opal.donate(self, ["$parent", "$next_sibling", "$previous_sibling", "$children", "$first_child", "$unique_key"]);
    })(self);

    self.$include((($a = $scope.Traversal) == null ? $opal.cm('Traversal') : $a));

    (function($base) {
      var self = $module($base, 'Attribute');

      var def = self._proto, $scope = self._scope;
      def['$[]='] = function(name, value) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].setAttributeValue(name, value);
      };

      def['$[]'] = function(name) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].attribute(name);
      };

      def.$attributes = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].attributeNames();
      };
            ;$opal.donate(self, ["$[]=", "$[]", "$attributes"]);
    })(self);

    self.$include((($a = $scope.Attribute) == null ? $opal.cm('Attribute') : $a));

    (function($base) {
      var self = $module($base, 'Query');

      var def = self._proto, $scope = self._scope;
      def.$xpath = function(query) {
        var $a, self = this, set = nil;
        if (self['native'] == null) self['native'] = nil;

        set = self['native'].queryWithXPath(query);
        return (($a = $scope.XMLNodeSet) == null ? $opal.cm('XMLNodeSet') : $a).$new(set);
      }
            ;$opal.donate(self, ["$xpath"]);
    })(self);

    self.$include((($a = $scope.Query) == null ? $opal.cm('Query') : $a));

    (function($base) {
      var self = $module($base, 'Manipulation');

      var def = self._proto, $scope = self._scope;
      def.$append = function(child) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].appendWithNode(child);
        return self;
      };

      def.$add_child = function(child) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addChildWithNode(child);
        return self;
      };

      def.$add_next_sibling = function(sibling) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addNextSiblingWithNode(sibling);
        return self;
      };

      def.$add_previous_sibling = function(sibling) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addPreviousSiblingWithNode(sibling);
        return self;
      };

      def.$append_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].appendWithXMLString(xml);
        return self;
      };

      def.$prepend_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].prependWithXMLString(xml);
        return self;
      };

      def.$add_child_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addChildWithXMLString(xml);
        return self;
      };

      def.$add_next_sibling_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addNextSiblingWithXMLString(xml);
        return self;
      };

      def.$add_previous_sibling_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addPreviousSiblingWithXMLString(xml);
        return self;
      };

      def.$empty = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].empty();
        return self;
      };

      def.$remove = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].remove();
        return self;
      };
            ;$opal.donate(self, ["$append", "$add_child", "$add_next_sibling", "$add_previous_sibling", "$append_with_xml", "$prepend_with_xml", "$add_child_with_xml", "$add_next_sibling_with_xml", "$add_previous_sibling_with_xml", "$empty", "$remove"]);
    })(self);

    return self.$include((($a = $scope.Manipulation) == null ? $opal.cm('Manipulation') : $a));
  })(self, null)
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/xml_node.js.map
;
/* Generated by Opal 0.5.5 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $module = $opal.module;
  $opal.add_stubs(['$include', '$attr_reader', '$collect', '$new', '$alias_method', '$each', '$all', '$first', '$text']);
  return (function($base, $super) {
    function $XMLNodeSet(){};
    var self = $XMLNodeSet = $klass($base, $super, 'XMLNodeSet', $XMLNodeSet);

    var def = $XMLNodeSet._proto, $scope = $XMLNodeSet._scope, $a;
    self.$include((($a = $scope.Enumerable) == null ? $opal.cm('Enumerable') : $a));

    self.$attr_reader("native");

    def.$initialize = function(native$) {
      var self = this;
      return self['native'] = native$;
    };

    (function($base) {
      var self = $module($base, 'Core');

      var def = self._proto, $scope = self._scope, TMP_3;
      def.$count = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'].count();
      };

      def.$all = function() {
        var $a, $b, TMP_1, self = this;
        if (self['native'] == null) self['native'] = nil;

        return ($a = ($b = (self['native'].allObjects())).$collect, $a._p = (TMP_1 = function(node){var self = TMP_1._s || this, $a;if (node == null) node = nil;
        return (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a).$new(node)}, TMP_1._s = self, TMP_1), $a).call($b);
      };

      self.$alias_method("nodes", "all");

      def.$first = function() {
        var $a, self = this, node = nil;
        if (self['native'] == null) self['native'] = nil;

        node = self['native'].firstObject();
        if (node !== false && node !== nil) {
          return (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a).$new(node)
          } else {
          return nil
        };
      };

      def.$each = TMP_3 = function() {
        var $a, $b, TMP_2, self = this, $iter = TMP_3._p, $yield = $iter || nil;
        TMP_3._p = null;
        return ($a = ($b = self.$all()).$each, $a._p = (TMP_2 = function(obj){var self = TMP_2._s || this, $a;if (obj == null) obj = nil;
        return $a = $opal.$yield1($yield, obj), $a === $breaker ? $a : $a}, TMP_2._s = self, TMP_2), $a).call($b);
      };

      def.$text = function() {
        var $a, self = this;
        if (($a = self.$first()) !== false && $a !== nil) {
          return self.$first().$text()
          } else {
          return nil
        };
      };

      def.$to_n = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        return self['native'];
      };
            ;$opal.donate(self, ["$count", "$all", "$first", "$each", "$text", "$to_n"]);
    })(self);

    self.$include((($a = $scope.Core) == null ? $opal.cm('Core') : $a));

    (function($base) {
      var self = $module($base, 'Query');

      var def = self._proto, $scope = self._scope;
      def.$xpath = function(query) {
        var $a, self = this, set = nil;
        if (self['native'] == null) self['native'] = nil;

        set = self['native'].queryWithXPath(query);
        return (($a = $scope.XMLNodeSet) == null ? $opal.cm('XMLNodeSet') : $a).$new(set);
      }
            ;$opal.donate(self, ["$xpath"]);
    })(self);

    self.$include((($a = $scope.Query) == null ? $opal.cm('Query') : $a));

    (function($base) {
      var self = $module($base, 'Manipulation');

      var def = self._proto, $scope = self._scope;
      def.$append = function(child) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].appendWithNode(child);
        return self;
      };

      def.$add_child = function(child) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addChildWithNode(child);
        return self;
      };

      def.$add_next_sibling = function(sibling) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addNextSiblingWithNode(sibling);
        return self;
      };

      def.$add_previous_sibling = function(sibling) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addPreviousSiblingWithNode(sibling);
        return self;
      };

      def.$append_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].appendWithXMLString(xml);
        return self;
      };

      def.$prepend_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].prependWithXMLString(xml);
        return self;
      };

      def.$add_child_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addChildWithXMLString(xml);
        return self;
      };

      def.$add_next_sibling_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addNextSiblingWithXMLString(xml);
        return self;
      };

      def.$add_previous_sibling_with_xml = function(xml) {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].addPreviousSiblingWithXMLString(xml);
        return self;
      };

      def.$empty = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].empty();
        return self;
      };

      def.$remove = function() {
        var self = this;
        if (self['native'] == null) self['native'] = nil;

        self['native'].remove();
        return self;
      };
            ;$opal.donate(self, ["$append", "$add_child", "$add_next_sibling", "$add_previous_sibling", "$append_with_xml", "$prepend_with_xml", "$add_child_with_xml", "$add_next_sibling_with_xml", "$add_previous_sibling_with_xml", "$empty", "$remove"]);
    })(self);

    return self.$include((($a = $scope.Manipulation) == null ? $opal.cm('Manipulation') : $a));
  })(self, null)
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/xml_node_set.js.map
;
/* Generated by Opal 0.5.5 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;
  $opal.add_stubs(['$attr_reader']);
  return (function($base, $super) {
    function $HTMLDoc(){};
    var self = $HTMLDoc = $klass($base, $super, 'HTMLDoc', $HTMLDoc);

    var def = $HTMLDoc._proto, $scope = $HTMLDoc._scope;
    self.$attr_reader("native");

    return (def.$initialize = function(html) {
      var self = this;
      return self['native'] = IGHTMLDocument(html);
    }, nil);
  })(self, (($a = $scope.XMLNode) == null ? $opal.cm('XMLNode') : $a))
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/html_doc.js.map
;
/* Generated by Opal 0.5.5 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;
  $opal.add_stubs([]);
  ;
  ;
  return true;
})(Opal);

//@ sourceMappingURL=/__opal_source_maps__/html_query.js.map
;
